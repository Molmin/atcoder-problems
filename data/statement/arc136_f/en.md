Score : $1000$ points

## Problem Statement

We have a checkerboard with $H$ rows and $W$ columns, where each square has a `0` or `1` written on it.
The current state of checkerboard is represented by $H$ strings $S_1,S_2,\cdots,S_H$: the $j$-th character of $S_i$ represents the digit in the square at the $i$-th row from the top and $j$-th column from the left.

Snuke will repeat the following operation.

- Choose one square uniformly at random.
Then, flip the value written in that square. (In other words, change `0` to `1` and vice versa.)

By the way, he loves an integer sequence $A=(A_1,A_2,\cdots,A_H)$, so he will terminate the process at the moment when the following condition is satisfied.

- For every $i$ ($1 \leq i \leq H$), the $i$-th row from the top contains exactly $A_i$ `1`s.

Particularly, he may do zero operations.

Find the expected value of the number of operations Snuke does, modulo $998244353$.

Definition of the expected value modulo $998244353$

It can be proved that the sought expected value is always a rational number. Additionally, under the Constraints of this problem, when that value is represented as an irreducible fraction $\frac{P}{Q}$, it can also be proved that $Q \not \equiv 0 \pmod{998244353}$. Thus, there uniquely exists an integer $R$ such that $R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$. Find this $R$.

## Constraints

- $1 \leq H,W \leq 50$
- $S_i$ is a string of length $W$ consisting of `0`, `1`.
- $0 \leq A_i \leq W$

## Input

Input is given from Standard Input in the following format:

> $H$ $W$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_H$
> 
> $A_1$ $A_2$ $\cdots$ $A_H$

## Output

Print the answer.

```input1
1 2
01
0
```

```output1
3
```

The process goes as follows.

- With probability $1/2$, a square with `1` is flipped. The $1$-st row now contains zero `1`s, terminating the process.
- With probability $1/2$, a square with `0` is flipped. The $1$-st row now contains two `1`s, continuing the process.-   - One of the squares is flipped. Regardless of which square is flipped, the $1$-st row now contains one `1`, continuing the process.-   -   - With probability $1/2$, a square with `1` is flipped. The $1$-st row now contains zero `1`s, terminating the process.
-   -   - With probability $1/2$, a square with `0` is flipped. The $1$-st row now contains two `1`s, continuing the process.
-   -   - $\vdots$

The expected value of the number of operations is $3$.

```input2
3 3
000
100
110
0 1 2
```

```output2
0
```

```input3
2 2
00
01
1 0
```

```output3
332748127
```

```input4
5 4
1101
0000
0010
0100
1111
1 3 3 2 1
```

```output4
647836743
```