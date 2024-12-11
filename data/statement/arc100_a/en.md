Score : $300$ points

## Problem Statement

Snuke has an integer sequence $A$ of length $N$.

He will freely choose an integer $b$.
Here, he will get sad if $A_i$ and $b+i$ are far from each other.
More specifically, the *sadness* of Snuke is calculated as follows:

- $abs(A_1 - (b+1)) + abs(A_2 - (b+2)) + ... + abs(A_N - (b+N))$

Here, $abs(x)$ is a function that returns the absolute value of $x$.

Find the minimum possible sadness of Snuke.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $...$ $A_N$

## Output

Print the minimum possible sadness of Snuke.

```input1
5
2 2 3 5 5
```

```output1
2
```

If we choose $b=0$, the sadness of Snuke would be $abs(2-(0+1))+abs(2-(0+2))+abs(3-(0+3))+abs(5-(0+4))+abs(5-(0+5))=2$.
Any choice of $b$ does not make the sadness of Snuke less than $2$, so the answer is $2$.

```input2
9
1 2 3 4 5 6 7 8 9
```

```output2
0
```

```input3
6
6 5 4 3 2 1
```

```output3
18
```

```input4
7
1 1 1 1 2 3 4
```

```output4
6
```