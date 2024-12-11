Score : $600$ points

## Problem Statement

There are $N$ integers $A_1, A_2, A_3, \dots, A_N$ written on a blackboard.<br>
You will do the following operation $N - 1$ times:

- Choose two numbers written on the blackboard and erase them. Let $x$ and $y$ be the erased numbers. Then, write $\gcd(x, y)$ or $\min(x, y)$ on the blackboard.

After $N - 1$ operations, just one integer will remain on the blackboard. How many possible values of this number are there?

## Constraints

- $2 \le N \le 2000$
- $1 \le A_i \le 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $A_3$ $\dots$ $A_N$

## Output

Print the number of possible values of the last remaining number on the blackboard.

```input1
3
6 9 12
```

```output1
2
```

The possible values of the last remaining number are $3$ and $6$.<br>
We will have $3$ in the end if, for example, we do as follows:

- choose $9, 12$ and erase them from the blackboard, then write $\gcd(9, 12) = 3$;
- choose $6, 3$ and erase them from the blackboard, then write $\min(6, 3) = 3$.

Also, we will have $6$ in the end if, for example, we do as follows:

- choose $6, 12$ and erase them from the blackboard, then write $\gcd(6, 12) = 6$;
- choose $6, 9$ and erase them from the blackboard, then write $\min(6, 9) = 6$.

```input2
4
8 2 12 6
```

```output2
1
```

$2$ is the only number that can remain on the blackboard.

```input3
7
30 28 33 49 27 37 48
```

```output3
7
```

$1$, $2$, $3$, $4$, $6$, $7$, and $27$ can remain on the blackboard.