Score : $1000$ points

## Problem Statement

You are given a string $S$ consisting of digits between `1` and `9`, inclusive.
You will insert at most $K$ commas (`,`) into this string to separate it into multiple numbers.

Your task is to minimize the maximum number among those produced by inserting commas. Find minimum possible such value.

## Constraints

- $0 \leq K &lt; |S| \leq 100,000$
- $S$ consists of digits between `1` and `9`, inclusive.

## Partial Scores

- In the test set worth $100$ points, $|S| \leq 2$.
- In the test set worth another $100$ points, $|S| \leq 16$.
- In the test set worth another $200$ points, $|S| \leq 100$.
- In the test set worth another $200$ points, $|S| \leq 2,000$.

## Input

The input is given from Standard Input in the following format:

> $K$
> 
> $S$

## Output

Print the minimum possible value.

```input1
2
15267315
```

```output1
315
```

When the string is separated into $152$, $67$ and $315$, the maximum among these is $315$, which is the minimum possible value.

```input2
0
12456174517653111
```

```output2
12456174517653111
```

$12456174517653111$ itself is the answer.

```input3
8
127356176351764127645176543176531763517635176531278461856198765816581726586715987216581
```

```output3
5317635176
```