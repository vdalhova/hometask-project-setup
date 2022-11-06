export function getRectanglePerimeter(length, width) {

    if (typeof (length) !== 'number') {
        return "Length must be a number!";
    }
    else if (typeof (width) !== 'number') {
        return "Width must be a number!";
    }
    else if (length < 0 || width < 0) {
        return "Perimeter can not be negative!";
    }
    return 2 * (length + width);
}


export function getRectangleArea(length, width) {
    if (typeof (length) !== 'number') {
        return "Length must be a number!";
    }
    else if (typeof (width) !== 'number') {
        return "Width must be a number!";
    }
    else if (length < 0 || width < 0) {
        return "Area can not be negative!";
    }
    return length * width;
}

export function getRectangleInfo(length, width) {
    if (typeof (length) !== 'number' || typeof (width) !== 'number') {
        return "The dimensions of the rectangle must be numbers!";
    }
    else if (length < 0 || width < 0) {
        return "The dimensions of the rectangle can not be negative!";
    }
    const area = getRectangleArea(length, width);
    const perimeter = getRectanglePerimeter(length, width);
    return (`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
}

