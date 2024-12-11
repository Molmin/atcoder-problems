Score : $200$ points

## Problem Statement

We have many oranges. It is known that every orange weighs between $A$ and $B$ grams, inclusive. (An orange can have a non-integer weight.)

We chose some of those oranges, and their total weight was exactly $W$ kilograms.

Find the minimum and maximum possible numbers of oranges chosen. If no set of oranges can weigh exactly $W$ kilograms in total, report that fact.

## Constraints

- $1 \leq A \leq B \leq 1000$
- $1 \leq W \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $W$

## Output

Print the minimum and maximum possible numbers of oranges chosen, in this order, with space in between. If there is no number of oranges that can have the specified total weight, print `UNSATISFIABLE` instead.

```input1
100 200 2
```

```output1
10 20
```

Here, one range weighs between $100$ and $200$ grams (inclusive).

- If we choose $10$ $200$-gram oranges, their total weight will be exactly $2$ kilograms.
- If we choose $20$ $100$-gram oranges, their total weight will be exactly $2$ kilograms.

With less than $10$ oranges or more than $20$ oranges, the total weight will never be exactly $2$ kilograms, so the minimum and maximum possible numbers of oranges chosen are $10$ and $20$, respectively.

```input2
120 150 2
```

```output2
14 16
```

Here, one range weighs between $120$ and $150$ grams (inclusive).

- If we choose $10$ $140$-gram oranges and $4$ $150$-gram oranges, for example, their total weight will be exactly $2$ kilograms.
- If we choose $8$ $120$-gram oranges and $8$ $130$-gram oranges, for example, their total weight will be exactly $2$ kilograms.

With less than $14$ oranges or more than $16$ oranges, the total weight will never be exactly $2$ kilograms, so the minimum and maximum possible numbers of oranges chosen are $14$ and $16$, respectively.

```input3
300 333 1
```

```output3
UNSATISFIABLE
```

Here, one range weighs between $300$ and $333$ grams (inclusive).

No set of oranges of this kind can weigh exactly $1$ kilograms in total.