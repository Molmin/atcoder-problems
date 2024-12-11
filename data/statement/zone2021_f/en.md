Score : $600$ points

## Problem Statement

As your startup's new product, you are planning to build warp gates that allow travel between all planets.<br>
There are $N$ planets, numbered $0$ through $N-1$, where there is an integer $n$ such that $N = 2^n$. To allow fast travel between all these planets, you want to make $N - 1$ warp gates, each of which allows instant travel between two planets. However, for some pairs of planets that are incompatible with each other, you cannot make a warp gate between them.<br>
More specifically, such pairs of planets incompatible with each other are represented by a sequence $A = (A_1, A_2, \dots, A_M)$. If and only if there is an integer $i$ such that $a\ \mathrm{xor}\ b = A_i$, you cannot make a warp gate between Planet $a$ and Planet $b$.<br>
Determine whether it is possible to make a network of warp gates allowing travel between every two planets. If it is possible, find one such way to make $N - 1$ warp gates.

What is $\mathrm{xor}$?

The bitwise $\mathrm{xor}$ of integers $a$ and $b$, $a\ \mathrm{xor}\ b$, is defined as follows:

- When $a\ \mathrm{xor}\ b$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if exactly one of $a$ and $b$ is $1$, and $0$ otherwise.

For example, we have $3\ \mathrm{xor}\ 5 = 6$ (in base two: $011\ \mathrm{xor}\ 101 = 110$).

## Constraints

- All values in input are integers.
- There exists an integer $n$ such that $1 \leq n \leq 18$ and $N = 2^n$.
- $0 \leq M \leq N - 1$
- $0 &lt; A_1 &lt; A_2 &lt; \dots &lt; A_M &lt; N$

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\cdots$ $A_M$

## Output

If it is impossible to make a network of warp gates allowing travel between every two planets, print `-1`.

If it is possible to make such a network, print one way to make such $N - 1$ warp gates in the following format:

> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_{N-1}$ $V_{N-1}$

It means you make a warp gate between Planet $U_i$ and Planet $V_i$.

```input1
4 1
3
```

```output1
1 0
1 3
0 2
```

Since $1\ \mathrm{xor}\ 0 = 1,\ 1\ \mathrm{xor}\ 3 = 2,\ 0\ \mathrm{xor}\ 2 = 2$, we can make those $N - 1$ warp gates, and they allow travel between every two planets, so this output will be considered correct.<br>
There are many other possible outputs that will also be considered correct.

```input2
8 0
```

```output2
1 0
1 3
1 5
6 7
6 4
6 2
3 2
```

```input3
8 7
1 2 3 4 5 6 7
```

```output3
-1
```