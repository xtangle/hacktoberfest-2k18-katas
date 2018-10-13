/*
 * In the popular Minesweeper game you have a board with some mines and those
 * cells that don't contain a mine have a number in it that indicates the total
 * number of mines in the neighboring cells. Starting off with some arrangement
 * of mines we want to create a Minesweeper game setup.
 */

export const minesweeper = (matrix) => {
    const height = matrix.length
    const width = matrix[0].length
    let map = []
    let mapRow = []

    matrix.map((rows, y) => {
        mapRow = []

        rows.map((cell, x) => {
            let neighbors = 0
            let notAtTopEdge = y > 0
            let notAtRightEdge = x < width - 1
            let notAtBottomEdge = y < height - 1
            let notAtLeftEdge = x > 0

            // top
            neighbors += (notAtTopEdge &&
                matrix[y - 1][x] ? 1 : 0)
            // top right
            neighbors += (notAtTopEdge && notAtRightEdge &&
                matrix[y - 1][x + 1] ? 1 : 0)
            // right
            neighbors += (notAtRightEdge && matrix[y][x + 1] ? 1 : 0)
            // right bottom
            neighbors += (notAtRightEdge && notAtBottomEdge &&
                matrix[y + 1][x + 1] ? 1 : 0)
            // bottom
            neighbors += (notAtBottomEdge && matrix[y + 1][x] ? 1 : 0)
            // bottom left
            neighbors += (notAtBottomEdge && notAtLeftEdge &&
                matrix[y + 1][x - 1] ? 1 : 0)
            // left
            neighbors += (notAtLeftEdge && matrix[y][x - 1] ? 1 : 0)
            // left top
            neighbors += (notAtLeftEdge && notAtTopEdge &&
                matrix[y - 1][x - 1] ? 1 : 0)

            mapRow.push(neighbors)
        })

        map.push(mapRow)
    })

    return map
};
