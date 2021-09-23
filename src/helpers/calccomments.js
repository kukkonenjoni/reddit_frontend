{/* If you happened to look at this file i feel sorry for you and this will be changed in the future :( */}


export default function calccomments(comments) {
    let total = 0
    comments.forEach((comment) => {
        const test = "comments"
        let path = comment[test]
        if (path.length > 0) {
            total +=1
            path.forEach((comment) => {
                path = comment[test]
                if (path.length > 0) {
                    path.forEach((comment) => {
                        path = comment[test]
                        if (path.length > 0) {
                            path.forEach((comment) => {
                                path = comment[test]
                                if (path.length > 0) {
                                    path.forEach((comment) => {
                                        path = comment[test]
                                        if (path.length > 0) {
                                            path.forEach((comment) => {
                                                path = comment[test]
                                                if (path.length > 0) {
                                                    path.forEach((comment) => {
                                                        path = comment[test]
                                                        if (path.length > 0) {
                                                            path.forEach((comment) => {
                                                                path = comment[test]
                                                                if (path.length > 0) {
                                                                    path.forEach((comment) => {
                                                                        path = comment[test]
                                                                        if (path.length > 0) {
                                                                            path.forEach((comment) => {
                                                                                path = comment[test]
                                                                                if (path.length > 0) {
                                                                                    total += path.length
                                                                                }
                                                                                else {
                                                                                    total +=1
                                                                                }
                                                                            })
                                                                        }
                                                                        else {
                                                                            total +=1
                                                                        }
                                                                    })
                                                                }
                                                                else {
                                                                    total +=1
                                                                }
                                                            })
                                                        }
                                                        else {
                                                            total +=1
                                                        }
                                                    })
                                                }
                                                else {
                                                    total +=1
                                                }
                                            })
                                        }
                                        else {
                                            total +=1
                                        }
                                    })
                                }
                                else {
                                    total +=1
                                }
                            })
                        }
                        else {
                            total +=1
                        }
                    })
                }
                else {
                    total +=1
                }
            })
        } else {
            total +=1
        }
    })
    console.log(total)
    return total
}