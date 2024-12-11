Score : $600$ points

## Problem Statement

Let us write a positive integer on each face of a cube. How many ways are there to do this so that the sum of the six numbers written is $S$?

Here, two ways to write numbers are not distinguished when they only differ by rotation. (Numbers have no direction.)

The count can be enormous, so find it modulo $998244353$.

## Constraints

- $6 \leq S \leq 10^{18}$
- $S$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the count modulo $998244353$.

```input1
8
```

```output1
3
```

We have one way to write $1,1,1,1,1,3$ on the cube and two ways to write $1,1,1,1,2,2$ (one where we write $2$ on adjacent faces and another where we write $2$ on opposite faces), for a total of three ways.

```input2
9
```

```output2
5
```

```input3
50
```

```output3
80132
```

```input4
10000000000
```

```output4
2239716
```

Find the count modulo $998244353$.