/*
New object named Book
One property and one method
add at least five different books

*/

class Book{
    constructor(
        title,
        author,
        pubYear,
        pageNumber,
        currentPage,
        readStatus,
){
    this.title = title;
    this.author = author;
    this.pubYear = pubYear;
    this.pageNumber = pageNumber;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
}
    upadateCurrentPage(newCurrentPage) {
        this.currentPage = newCurrentPage;
    }
    updateReadStatus(newReadStatus){
        this.readStatus = newReadStatus;
    }
}
export default Book;