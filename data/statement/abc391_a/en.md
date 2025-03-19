Score : $100$ points

## Problem Statement

You are given a string $D$ representing one of the eight directions (north, east, west, south, northeast, northwest, southeast, southwest). The correspondence between the directions and their representing strings is as follows.

- North: `N`
- East: `E`
- West: `W`
- South: `S`
- Northeast: `NE`
- Northwest: `NW`
- Southeast: `SE`
- Southwest: `SW`

Print the string representing the direction opposite to the direction denoted by $D$.

## Constraints

- $D$ is one of `N`, `E`, `W`, `S`, `NE`, `NW`, `SE`, `SW`.

## Input

The input is given from Standard Input in the following format:

> $D$

## Output

Print the answer.

```input1
N
```

```output1
S
```

Print `S`, which represents south, the direction opposite to north.

```input2
SE
```

```output2
NW
```

Print `NW`, which represents northwest, the direction opposite to southeast.