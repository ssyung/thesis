#Get the hypernyms of the words
#Perform a clustering analysis on the words

options( java.parameters = "-Xmx4g" )

library(stringr)
library(tm) #text mining
library(tau) #wordcount
library(slam) #col_sums
library(wordcloud)
library(ggplot2)
library(RColorBrewer)
library(wordnet) #hypernym
library(NLP) #word tagging
library(openNLP)

#read in cleaned interview text data
words <- read.csv("testcleaned.csv", stringsAsFactors = F)

#######################################################################
############################ clustering ###############################
#######################################################################

library(tsne)
library(Rtsne)
library(fpc) #plotcluster
library(ggrepel)
library(TSP) #Traveling Salesman Problem

bookWordVector <- as.matrix(dtm)

# #Hierarchical Agglomerative Clustering
# d <- dist(bookWordVector, method = "euclidean")
# fit <- hclust(d, method="ward.D")
# plot(fit)
# rect.hclust(fit, k=14, border="red")
# rm(d,fit)
# 
# #Determine number of clusters
# #http://www.statmethods.net/advstats/cluster.html
# wss <- (nrow(bookWordVector)-1)*sum(apply(bookWordVector,2,var))
# for (i in 2:50) wss[i] <- sum(kmeans(bookWordVector, centers=i)$withinss)
# plot(1:length(wss), wss, type="b", xlab="Number of Clusters", ylab="Within groups sum of squares")
# rm(wss,i)
# 
# #Kmeans Cluster with X centers and iterations =10000
# set.seed(19)
# km <- kmeans(bookWordVector,14,10000)
# plotcluster(bookWordVector, km$cluster, pch=16)
# booksLeft$cluster <- km$cluster
# 
# #Run principle component analysis
# pc <- prcomp(bookWordVector)
# plot(pc$x[,1], pc$x[,2],col=km$cluster,pch=16)

# #Run Rtsne
# set.seed(19)
# rtsneBooks <- Rtsne(bookWordVector, check_duplicates = F)
# plot(rtsneBooks$Y, xlab="", ylab="", pch=16, cex=0.6, col=rgb(0, 0, 0, 0.5))
# booksLeft$x <- rtsneBooks$Y[,1]
# booksLeft$y <- rtsneBooks$Y[,2]

#Run tsne
set.seed(19)
tsneBooks <- tsne(bookWordVector, k=2, max_iter=500)
plot(tsneBooks[,1], tsneBooks[,2], xlab="", ylab="", asp=1, pch=16, cex=0.6, col=rgb(0, 0, 0, 0.5))
booksLeft$x <- tsneBooks[,1]
booksLeft$y <- tsneBooks[,2]

#Plot where the books ended up with certain popular terms
par(mfrow=c(6,7))
par(mar=c(1,1,4.1,1))
for(i in 1:42) {
  titlesChosen <- grep(paste0('\\<',termFrequency$term[i],'\\>'), booksLeft$titleClean)
  plot(booksLeft$x[titlesChosen], booksLeft$y[titlesChosen], main=termFrequency$term[i], 
       xlim=c(-50,50), ylim=c(50,-50), xlab="", ylab="", xaxt="n", yaxt="n", 
       pch=16, cex=0.6, col=rgb(0, 0, 0, 0.5), asp=1)
}#for i
rm(titlesChosen)
par(mfrow=c(1,1))
par(mar=c(5.1,4.1,4.1,2.1))

# ggplot(booksLeft, aes(x,y)) + 
#   geom_point(size = 1, alpha = 0.5) +
#   geom_text(label = titlesLeft, size=1) +
#   theme_minimal()

# #Plot the result with non-overlapping labels
# p <- ggplot(booksLeft, aes(x,y)) + 
#   geom_point(aes(size = sqrt(num_ratings)), alpha = 0.5) +
#   geom_text_repel(aes(size = num_ratings, label = title), 
#                   point.padding = NA, segment.size = 0.2, segment.color = '#e5e5e5') +
#   theme_minimal()
# plot(p)
# ggsave(filename="tsne for books 4.pdf", plot=p, width=60, height=40, units="cm")

#######################################################################
################### plot the clustering results #######################
#######################################################################

#Find centers for most popular terms
termFrequency$x <- termFrequency$y <- NA
for(i in 1:nrow(termFrequency)) {
  titlesFound <- grep(paste0('\\<',termFrequency$term[i],'\\>'), booksLeft$titleClean)
  termFrequency$x[i] <- mean(booksLeft$x[titlesFound])
  termFrequency$y[i] <- mean(booksLeft$y[titlesFound])
}#for i
rm(i, titlesFound)

#Plot the books and centers of common words
plot(booksLeft$x, booksLeft$y, xlab="", ylab="", xaxt="n", yaxt="n", 
     asp=1, pch=16, cex=0.6, col=rgb(0, 0, 0, 0.5))
#text(booksLeft$x, booksLeft$y, labels=booksLeft$title, cex = 0.4)
text(termFrequency$x, termFrequency$y, labels=termFrequency$term, cex = 0.8)

#Find the closest book, to link books from the same author
authorsLeft <- unique(booksLeft$authorRank)
booksLeft$pathOrder <- NA
for(i in 1:length(authorsLeft)) {
  chosenRows <- which(booksLeft$authorRank == authorsLeft[i])
  chosenBooks <- booksLeft[chosenRows,]
  
  #Find the shortest path trough thes books
  #http://stackoverflow.com/questions/27363653/find-shortest-path-from-x-y-coordinates-with-start-%E2%89%A0-end
  tsp <- TSP(dist(chosenBooks[,c("x","y")], method = "euclidean"))
  tsp <- insert_dummy(tsp, label = "cut")
  tour <- solve_TSP(tsp, method="2-opt", control=list(rep=10))
  path.tsp <- unname(cut_tour(tour, "cut"))
  #path.tsp
  
  #Plot the path
  lines(chosenBooks$x[path.tsp], chosenBooks$y[path.tsp], col=rgb(0, 0, 0, 0.2), lwd=0.5)
  
  #Attach the route in the right order to the data
  pathOrder <- data.frame(originalOrder = 1:length(chosenRows), pathOrder = path.tsp)
  pathOrder <- pathOrder[order(pathOrder$pathOrder),]
  booksLeft$pathOrder[chosenRows] <- pathOrder$originalOrder
}#for i
rm(chosenBooks,i,tsp,tour,path.tsp,pathOrder,chosenRows,authorsLeft)

#Add some more information
booksLeft$id <- 1:nrow(booksLeft)
#Mark my favorite books (most of Brandon, Patrick and JK, some of Terry and Brent)
favs <- c(62,65,58,59,60,61,1,4,2,7,6,258,259,257,541,544,545,129,130,131)
booksLeft$favBook <- 0
booksLeft$favBook[which(booksLeft$id %in% favs)] <- 1
#Mark my favorite authors: Brandon Sanderson, Patrick Rothfuss, J.K. Rowling
favAuthors <- c(7,30,1)
booksLeft$favAuthor <- 0
booksLeft$favAuthor[which(booksLeft$authorRank %in% favAuthors)] <- 1
rm(favs,favAuthors)
#Rounding to save some space
booksLeft$x <- round(booksLeft$x,3)
booksLeft$y <- round(booksLeft$y,3)
#Order on author then path
booksLeft <- booksLeft[order(booksLeft$authorRank, booksLeft$pathOrder),]

#Save the resulting locations to a file
write.csv(booksLeft[,c("id","author","authorRank","title","avg_rating",
                       "num_ratings","publication_year","num_pages",
                       "book_series","numWords","favBook","favAuthor",
                       "x","y","pathOrder")], 
          file="topAuthorBooksLocations.csv", row.names=F, na="")
#Save the top word locations to a file
write.csv(termFrequency, file="topTermLocations.csv", row.names=F, na="")


#Write all
saveRDS(booksLeft, file="booksLeft.rds")