Score : $400$ points

## Problem Statement

You are given a sequence of positive integers $A=(a_1,\ldots,a_N)$ of length $N$.<br>
There are $(2^N-1)$ ways to choose one or more terms of $A$.  How many of them have an integer-valued average?  Find the count modulo $998244353$.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq a_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $\ldots$ $a_N$

## Output

Print the answer.

```input1
3
2 6 2
```

```output1
6
```

For each way to choose terms of $A$, the average is obtained as follows:

- <p>If just $a_1$ is chosen, the average is $\frac{a_1}{1}=\frac{2}{1} = 2$, which is an integer.  </p>
- <p>If just $a_2$ is chosen, the average is $\frac{a_2}{1}=\frac{6}{1} = 6$, which is an integer.  </p>
- <p>If just $a_3$ is chosen, the average is $\frac{a_3}{1}=\frac{2}{1} = 2$, which is an integer.  </p>
- <p>If $a_1$ and $a_2$ are chosen, the average is $\frac{a_1+a_2}{2}=\frac{2+6}{2} = 4$, which is an integer.  </p>
- <p>If $a_1$ and $a_3$ are chosen, the average is $\frac{a_1+a_3}{2}=\frac{2+2}{2} = 2$, which is an integer.  </p>
- <p>If $a_2$ and $a_3$ are chosen, the average is $\frac{a_2+a_3}{2}=\frac{6+2}{2} = 4$, which is an integer.  </p>
- <p>If $a_1$, $a_2$, and $a_3$ are chosen, the average is $\frac{a_1+a_2+a_3}{3}=\frac{2+6+2}{3} = \frac{10}{3}$, which is not an integer.</p>

Therefore, $6$ ways satisfy the condition.

```input2
5
5 5 5 5 5
```

```output2
31
```

Regardless of the choice of one or more terms of $A$, the average equals $5$.