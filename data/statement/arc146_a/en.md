Score : $300$ points

## Problem Statement

There are $N$ cards, numbered $1$ to $N$.

Card $i$ has a positive integer $A_i$ written on it.

You can choose three of these cards and concatenate the integers written on them in any order you like to make a new integer. For example, if you choose cards with $1$, $23$, and $4$ written on them, you can make integers such as $1234$ and $4231$.

Find the maximum integer you can make.

## Constraints

- $3 \le N \le 2 \times 10^5$
- $1 \le A_i &lt; 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\dots$ $A_N$

## Output

Print the answer.

```input1
5
1 4 3 5 8
```

```output1
854
```

If you choose cards with $4$, $5$, and $8$ written on them, you can make $458$, $485$, $548$, $584$, $845$, or $854$.

You can make nothing greater than $854$, so the answer is $854$.

```input2
8
813 921 481 282 120 900 555 409
```

```output2
921900813
```