Score : $600$ points

## Problem Statement

Given are two sequences $a=\{a_0,\ldots,a_{N-1}\}$ and $b=\{b_0,\ldots,b_{N-1}\}$ of $N$ non-negative integers each.

Snuke will choose an integer $k$ such that $0 \leq k &lt; N$ and an integer $x$ not less than $0$, to make a new sequence of length $N$, $a'=\{a_0',\ldots,a_{N-1}'\}$, as follows:

- $a_i'= a_{i+k \mod N}\ XOR \ x$

Find all pairs $(k,x)$ such that $a'$ will be equal to $b$.

What is $\text{ XOR }$?

The XOR of integers $A$ and $B$, $A \text{ XOR } B$, is defined as follows:

- When $A \text{ XOR } B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if either $A$ or $B$, but not both, has $1$ in the $2^k$'s place, and $0$ otherwise.

For example, $3 \text{ XOR } 5 = 6$. (In base two: $011 \text{ XOR } 101 = 110$.)

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $0 \leq a_i,b_i &lt; 2^{30}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_0$ $a_1$ $...$ $a_{N-1}$
> 
> $b_0$ $b_1$ $...$ $b_{N-1}$

## Output

Print all pairs $(k, x)$ such that $a'$ and $b$ will be equal, using one line for each pair, in ascending order of $k$ (ascending order of $x$ for pairs with the same $k$).

If there are no such pairs, the output should be empty.

```input1
3
0 2 1
1 2 3
```

```output1
1 3
```

If $(k,x)=(1,3)$,

- <p>$a_0'=(a_1\ XOR \ 3)=1$</p>
- <p>$a_1'=(a_2\ XOR \ 3)=2$</p>
- <p>$a_2'=(a_0\ XOR \ 3)=3$</p>

and we have $a' = b$.

```input2
5
0 0 0 0 0
2 2 2 2 2
```

```output2
0 2
1 2
2 2
3 2
4 2
```

```input3
6
0 1 3 7 6 4
1 5 4 6 2 3
```

```output3
2 2
5 5
```

```input4
2
1 2
0 0
```

```output4

```

No pairs may satisfy the condition.