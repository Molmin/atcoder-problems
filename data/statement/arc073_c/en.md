Score : $700$ points

## Problem Statement

There are $N$ bags, each containing two white balls. The $i$-th box contains two balls with integers $x_i$ and $y_i$ written on them, respectively.

For each of these bags, you will paint one of the balls red, and paint the other blue.

Afterwards, the $2N$ balls will be classified according to color.

Then, we will define the following:

- $R_{max}$: the maximum integer written on a ball painted in red
- $R_{min}$: the minimum integer written on a ball painted in red
- $B_{max}$: the maximum integer written on a ball painted in blue
- $B_{min}$: the minimum integer written on a ball painted in blue

Find the minimum possible value of $(R_{max} - R_{min}) \times (B_{max} - B_{min})$.

## Constraints

- $1 \leq N \leq 200,000$
- $1 \leq x_i, y_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $y_1$
> 
> $x_2$ $y_2$
> 
> :
> 
> $x_N$ $y_N$

## Output

Print the minimum possible value.

```input1
3
1 2
3 4
5 6
```

```output1
15
```

The optimal solution is to paint the balls with $x_1$, $x_2$, $y_3$ red, and paint the balls with $y_1$, $y_2$, $x_3$ blue.

```input2
3
1010 10
1000 1
20 1020
```

```output2
380
```

```input3
2
1 1
1000000000 1000000000
```

```output3
999999998000000001
```