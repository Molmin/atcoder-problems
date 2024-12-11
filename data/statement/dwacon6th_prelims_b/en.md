Score : $600$ points

## Problem Statement

There are $N$ slimes standing on a number line.
The $i$-th slime from the left is at position $x_i$.

It is guaruanteed that $1 \leq x_1 &lt; x_2 &lt; \ldots &lt; x_N \leq 10^{9}$.

Niwango will perform $N-1$ operations. The $i$-th operation consists of the following procedures:

- Choose an integer $k$ between $1$ and $N-i$ (inclusive) with equal probability.
- Move the $k$-th slime from the left, to the position of the neighboring slime to the right.
- Fuse the two slimes at the same position into one slime.

Find the total distance traveled by the slimes multiplied by $(N-1)!$ (we can show that this value is an integer), modulo $(10^{9}+7)$. If a slime is born by a fuse and that slime moves, we count it as just one slime.

## Constraints

- $2 \leq N \leq 10^{5}$
- $1 \leq x_1 &lt; x_2 &lt; \ldots &lt; x_N \leq 10^{9}$
- $x_i$ is an integer.

## Subtasks

- $400$ points will be awarded for passing the test cases satisfying $N \leq 2000$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_1$ $x_2$ $\ldots$ $x_N$

## Output

Print the answer.

```input1
3
1 2 3
```

```output1
5
```

- With probability $\frac{1}{2}$, the leftmost slime is chosen in the first operation, in which case the total distance traveled is $2$.
- With probability $\frac{1}{2}$, the middle slime is chosen in the first operation, in which case the total distance traveled is $3$.
- The answer is the expected total distance traveled, $2.5$, multiplied by $2!$, which is $5$.

```input2
12
161735902 211047202 430302156 450968417 628894325 707723857 731963982 822804784 880895728 923078537 971407775 982631932
```

```output2
750927044
```

- Find the expected value multiplied by $(N-1)!$, modulo $(10^9+7)$.