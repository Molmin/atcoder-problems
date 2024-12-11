Score : $100$ points

## Problem Statement

You are given a grid with $2$ rows and $3$ columns of squares.
The color of the square at the $i$-th row and $j$-th column is represented by the character $C_{ij}$.

Write a program that prints `YES` if this grid remains the same when rotated $180$ degrees, and prints `NO` otherwise.

## Constraints

- $C_{i,j}(1 \leq i \leq 2, 1 \leq j \leq 3)$ is a lowercase English letter.

## Input

Input is given from Standard Input in the following format:

> $C_{11}C_{12}C_{13}$
> 
> $C_{21}C_{22}C_{23}$

## Output

Print `YES` if this grid remains the same when rotated $180$ degrees; print `NO` otherwise.

```input1
pot
top
```

```output1
YES
```

This grid remains the same when rotated $180$ degrees.

```input2
tab
bet
```

```output2
NO
```

This grid does not remain the same when rotated $180$ degrees.

```input3
eye
eel
```

```output3
NO
```