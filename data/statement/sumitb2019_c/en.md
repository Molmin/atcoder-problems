Score: $300$ points

## Problem Statement

AtCoder Mart sells $1000000$ of each of the six items below:

- Riceballs, priced at $100$ yen (the currency of Japan) each
- Sandwiches, priced at $101$ yen each
- Cookies, priced at $102$ yen each
- Cakes, priced at $103$ yen each
- Candies, priced at $104$ yen each
- Computers, priced at $105$ yen each

Takahashi wants to buy some of them that cost exactly $X$ yen in total.
Determine whether this is possible.<br>
(Ignore consumption tax.)

## Constraints

- $1 \leq X \leq 100000$
- $X$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

If it is possible to buy some set of items that cost exactly $X$ yen in total, print `1`; otherwise, print `0`.

```input1
615
```

```output1
1
```

For example, we can buy one of each kind of item, which will cost $100+101+102+103+104+105=615$ yen in total.

```input2
217
```

```output2
0
```

No set of items costs $217$ yen in total.