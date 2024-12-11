Score : $700$ points

## Problem Statement

We have a rectangular piece of paper divided into $H \times W$ squares, where two of those squares are painted black and the rest are painted white. If we let $(i, j)$ denote the square at the $i$-th row and $j$-th column, the squares painted black are $(h_1, w_1)$ and $(h_2, w_2)$.

Maroon will repeat the following operation to cut the piece of paper:

- Assume that we have $h \times w$ squares remaining. There are $(h - 1)$ horizontal lines and $(w - 1)$ vertical lines that are parallel to the edges of the piece and pass the borders of the squares. He chooses one of these lines uniformly at random and cuts the piece into two along that line. Then,-   - if the two black squares are on the same piece, he throws away the other piece and continues the process;
-   - otherwise, he ends the process.

Find the expected value of the number of times Maroon cuts a piece of paper until he ends the process, modulo $998244353$.

## Notes

We can prove that the expected value in question is always a rational number. Additionally, under the constraints of this problem, we can also prove that if we express that value as an irreducible fraction $\frac{P}{Q}$, we have $Q \not \equiv 0 \pmod{998244353}$. Thus, there exists a unique integer $R$ such that $R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$. Answer this $R$.

## Constraints

- $1 \leq H, W \leq 10^5$
- $H \times W \geq 2$
- $1 \leq h_1, h_2 \leq H$
- $1 \leq w_1, w_2 \leq W$
- $(h_1, w_1) \neq (h_2, w_2)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $h_1$ $w_1$ $h_2$ $w_2$

## Print

Find the expected value of the number of times Maroon cuts a piece of paper until he ends the process, modulo $998244353$.

```input1
2 3
2 2 1 1
```

```output1
332748119
```

In the first cut, the process will end with probability $2/3$. For the remaining case with probability $1/3$, the process will end in the second cut.

Thus, the expected number of cuts is $1 \times 2/3 + 2 \times 1/3 = 4/3$.

```input2
1 5
1 2 1 3
```

```output2
332748120
```

```input3
2 1
2 1 1 1
```

```output3
1
```

The process will always end in the first cut.

```input4
10 10
3 4 5 6
```

```output4
831078040
```