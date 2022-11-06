import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test('should calculate correct rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(15, 5);
    expect(perimeter).toBe(40);
});

test('perimeter should be positive', () => {
    const perimeter = getRectanglePerimeter(-15, 5);
    expect(perimeter).toBe("Perimeter can not be negative!");
});

test('the dimensions of the rectangle must be numbers (perimeter)', () => {
    const perimeterWithLengthIsNaN = getRectanglePerimeter(true, 5);
    expect(perimeterWithLengthIsNaN).toBe("Length must be a number!");

    const perimeterWithWidthIsNull = getRectanglePerimeter(5, null);
    expect(perimeterWithWidthIsNull).toBe("Width must be a number!");

    const perimeterWithLengthIsString = getRectanglePerimeter('-15', 5);
    expect(perimeterWithLengthIsString).toBe("Length must be a number!");

    const perimeterWithWidthIsObject = getRectanglePerimeter(5, [15]);
    expect(perimeterWithWidthIsObject).toBe("Width must be a number!");
});

test('should calculate correct rectangle area', () => {
    const area = getRectangleArea(10, 7);
    expect(area).toBe(70);
});

test('area should be positive', () => {
    const area = getRectangleArea(-10, -7);
    expect(area).toBe("Area can not be negative!");
});

test('the dimensions of the rectangle must be numbers (area)', () => {
    const perimeterWithLengthIsNaN = getRectangleArea('-7', 7);
    expect(perimeterWithLengthIsNaN).toBe("Length must be a number!");

    const perimeterWithWidthIsNaN = getRectangleArea(7, false);
    expect(perimeterWithWidthIsNaN).toBe("Width must be a number!");

    const perimeterWithLengthIsObject = getRectangleArea({ "length": 10 }, 7);
    expect(perimeterWithLengthIsObject).toBe("Length must be a number!");
});

test('should display correct perimeter and area of the rectangle', () => {
    const info = getRectangleInfo(10, 7);
    const perimeter = 34;
    const area = 70;
    expect(info).toBe(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
});

test('dimensions of the rectangles should be positive', () => {
    const info = getRectangleInfo(-10, 7);
    expect(info).toBe("The dimensions of the rectangle can not be negative!");
});

test('dimensions of the rectangles must be numbers (info)', () => {
    const info = getRectangleInfo(' ', 7);
    expect(info).toBe("The dimensions of the rectangle must be numbers!");
});
