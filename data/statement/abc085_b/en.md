Score : $200$ points

## Problem Statement

An *$X$-layered kagami mochi* $(X \geq 1)$ is a pile of $X$ round mochi (rice cake) stacked vertically where each mochi (except the bottom one) has a smaller diameter than that of the mochi directly below it. For example, if you stack three mochi with diameters of $10$, $8$ and $6$ centimeters from bottom to top in this order, you have a $3$-layered kagami mochi; if you put just one mochi, you have a $1$-layered kagami mochi.

Lunlun the dachshund has $N$ round mochi, and the diameter of the $i$-th mochi is $d_i$ centimeters. When we make a kagami mochi using some or all of them, at most how many layers can our kagami mochi have?

## Constraints

- $1 \leq N \leq 100$
- $1 \leq d_i \leq 100$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $d_1$
> 
> $:$
> 
> $d_N$

## Output

Print the maximum number of layers in a kagami mochi that can be made.

```input1
4
10
8
8
6
```

```output1
3
```

If we stack the mochi with diameters of $10$, $8$ and $6$ centimeters from bottom to top in this order, we have a $3$-layered kagami mochi, which is the maximum number of layers.

```input2
3
15
15
15
```

```output2
1
```

When all the mochi have the same diameter, we can only have a $1$-layered kagami mochi.

```input3
7
50
30
50
100
50
80
30
```

```output3
4
```