Score : $400$ points

## Problem Statement

There are $N$ empty boxes arranged in a row from left to right.
The integer $i$ is written on the $i$-th box from the left $(1 \leq i \leq N)$.

For each of these boxes, Snuke can choose either to put a ball in it or to put nothing in it.

We say a set of choices to put a ball or not in the boxes is good when the following condition is satisfied:

- For every integer $i$ between $1$ and $N$ (inclusive), the total number of balls contained in the boxes with multiples of $i$ written on them is congruent to $a_i$ modulo $2$.

Does there exist a good set of choices? If the answer is yes, find one good set of choices.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2 \times 10^5$
- $a_i$ is $0$ or $1$.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

If a good set of choices does not exist, print `-1`.

If a good set of choices exists, print one such set of choices in the following format:

> $M$
> 
> $b_1$ $b_2$ $...$ $b_M$

where $M$ denotes the number of boxes that will contain a ball, and $b_1,\ b_2,\ ...,\ b_M$ are the integers written on these boxes, in any order.

```input1
3
1 0 0
```

```output1
1
1
```

Consider putting a ball only in the box with $1$ written on it.

- There are three boxes with multiples of $1$ written on them: the boxes with $1$, $2$, and $3$. The total number of balls contained in these boxes is $1$.
- There is only one box with a multiple of $2$ written on it: the box with $2$. The total number of balls contained in these boxes is $0$.
- There is only one box with a multiple of $3$ written on it: the box with $3$. The total number of balls contained in these boxes is $0$.

Thus, the condition is satisfied, so this set of choices is good.

```input2
5
0 0 0 0 0
```

```output2
0
```

Putting nothing in the boxes can be a good set of choices.