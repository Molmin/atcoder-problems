Score : $200$ points

## Problem Statement

You are given a image with a height of $H$ pixels and a width of $W$ pixels.
Each pixel is represented by a lowercase English letter.
The pixel at the $i$-th row from the top and $j$-th column from the left is $a_{ij}$.

Put a box around this image and output the result. The box should consist of `#` and have a thickness of $1$.

## Constraints

- $1 \leq H, W \leq 100$
- $a_{ij}$ is a lowercase English letter.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $a_{11}$ $...$ $a_{1W}$
> 
> $:$
> 
> $a_{H1}$ $...$ $a_{HW}$

## Output

Print the image surrounded by a box that consists of `#` and has a thickness of $1$.

```input1
2 3
abc
arc
```

```output1
#####
#abc#
#arc#
#####
```

```input2
1 1
z
```

```output2
###
#z#
###
```