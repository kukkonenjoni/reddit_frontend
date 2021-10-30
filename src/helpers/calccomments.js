export default function calccomments(comments) {
    let total = 0
    comments.forEach((comment) => {
        if (comment.comments.length > 0) {
            total += 1
            total += calccomments(comment.comments)
        } else {
            total += 1
        }
    })
    return total
}