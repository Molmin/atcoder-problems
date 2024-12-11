Score : $200$ points

## Problem Statement

We have a long seat of width $X$ centimeters.
There are many people who wants to sit here. A person sitting on the seat will always occupy an interval of length $Y$ centimeters.

We would like to seat as many people as possible, but they are all very shy, and there must be a gap of length at least $Z$ centimeters between two people, and between the end of the seat and a person.

At most how many people can sit on the seat?

## Constraints

- All input values are integers.
- $1 \leq X, Y, Z \leq 10^5$
- $Y+2Z \leq X$

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$ $Z$

## Output

Print the answer.

```input1
13 3 1
```

```output1
3
```

There is just enough room for three, as shown below:

![](https://img.atcoder.jp/abc078/4a35302937c3cbc2f625156e7834d27f.png)

Figure

```input2
12 3 1
```

```output2
2
```

```input3
100000 1 1
```

```output3
49999
```

```input4
64146 123 456
```

```output4
110
```

```input5
64145 123 456
```

```output5
109
```