import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test('should calculate correct rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(15, 5);
    expect(perimeter).toBe(40);
});

test('dimensions of the rectangle should be positive', () => {
    const perimeter = getRectanglePerimeter(-15, 5);
    expect(perimeter).toBe("The dimensions of the rectangle can not be negative!");
});

test('dimensions of the rectangle must be numbers (perimeter)', () => {
    const perimeterWithLengthIsBoolean = getRectanglePerimeter(true, 5);
    expect(perimeterWithLengthIsBoolean).toBe("Length must be a number!");

    const perimeterWithWidthIsNull = getRectanglePerimeter(5, null);
    expect(perimeterWithWidthIsNull).toBe("Width must be a number!");

    const perimeterWithLengthIsString = getRectanglePerimeter('-15', 5);
    expect(perimeterWithLengthIsString).toBe("Length must be a number!");

    const perimeterWithWidthIsObject = getRectanglePerimeter(5, [15]);
    expect(perimeterWithWidthIsObject).toBe("Width must be a number!");
});

test('dimensions of the rectangle must be greater than 0 (perimeter)', () => {
    const lengthZero = getRectanglePerimeter(0, 5);
    expect(lengthZero).toBe("The dimensions of the rectangle must be greater than 0!");

    const widthZero = getRectanglePerimeter(5, 0);
    expect(widthZero).toBe("The dimensions of the rectangle must be greater than 0!");
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
    const perimeterWithLengthIsString = getRectangleArea('-7', 7);
    expect(perimeterWithLengthIsString).toBe("Length must be a number!");

    const perimeterWithWidthIsBoolean = getRectangleArea(7, false);
    expect(perimeterWithWidthIsBoolean).toBe("Width must be a number!");

    const perimeterWithLengthIsObject = getRectangleArea({ "length": 10 }, 7);
    expect(perimeterWithLengthIsObject).toBe("Length must be a number!");
});

test('dimensions of the rectangle must be greater than 0 (area)', () => {
    const lengthZero = getRectangleArea(0, 5);
    expect(lengthZero).toBe("The dimensions of the rectangle must be greater than 0!");

    const widthZero = getRectangleArea(5, 0);
    expect(widthZero).toBe("The dimensions of the rectangle must be greater than 0!");
});

test('should display correct perimeter and area of the rectangle', () => {
    const info = getRectangleInfo(10, 7);
    const perimeter = 34;
    const area = 70;
    expect(info).toBe(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
});

test('dimensions of the rectangle should be positive', () => {
    const info = getRectangleInfo(-10, 7);
    expect(info).toBe("The dimensions of the rectangle can not be negative!");
});

test('dimensions of the rectangle must be numbers (info)', () => {
    const info = getRectangleInfo(' ', 7);
    expect(info).toBe("The dimensions of the rectangle must be numbers!");
});

test('dimensions of the rectangle must be greater than 0 (info)', () => {
    const lengthZero = getRectangleInfo(0, 7);
    expect(lengthZero).toBe("The dimensions of the rectangle must be greater than 0!");

    const widthZero = getRectangleInfo(7, 0);
    expect(widthZero).toBe("The dimensions of the rectangle must be greater than 0!");
});