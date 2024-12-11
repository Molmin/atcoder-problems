Score : $100$ points

## Problem Statement

You are given a string $S$ as input. This represents a valid date in the year $2019$ in the `yyyy/mm/dd` format. (For example, April $30$, $2019$ is represented as `2019/04/30`.)

Write a program that prints `Heisei` if the date represented by $S$ is not later than April $30$, $2019$, and prints `TBD` otherwise.

## Constraints

- $S$ is a string that represents a valid date in the year $2019$ in the `yyyy/mm/dd` format.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print `Heisei` if the date represented by $S$ is not later than April $30$, $2019$, and print `TBD` otherwise.

```input1
2019/04/30
```

```output1
Heisei
```

```input2
2019/11/01
```

```output2
TBD
```