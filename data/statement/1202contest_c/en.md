Score : $100$ points

## Problem Statement

Find the number of $h \times w$ binary matrices which satisfy both of the following conditions modulo $M$:

- When each row is interpreted as a string of length $w$, they are sorted in lexicographical order in the row direction.
- When each column is interpreted as a string of length $h$, they are sorted in lexicographical order in the column direction.

Given integers $H, W$ in the input, find the answer for all pairs of integers $h, w$ that satisfy $1 \le h \le H$, $1 \le w \le W$.

## Constraints

- $1 \le H \le 21$
- $1 \le W \le 100$
- $2 \le M \le 10^9$

## Input

The input is given from Standard Input in the following format:

> $H \ W \ M$

## Output

Output $H$ lines.
For the $i$-th line $(1 \le i \le H)$, output $W$ integers separated by spaces. Specifically, the $j$-th integer $(1 \le j \le W)$ should be the answer to this problem when $h = i, w = j$.

```input1
2 3 5201314
```

```output1
2 3 4
3 7 14
```

For example, in the case of $(h, w) = (2, 3)$, there are $14$ matrices that satisfy the conditions of the problem statement, as shown below:

```output1
000 000 000 000 001 001 001 001 001 011 011 011 011 111
000 001 011 111 001 010 011 110 111 011 100 101 111 111
```

```input2
10 8 1000000000
```

```output2
2 3 4 5 6 7 8 9
3 7 14 25 41 63 92 129
4 14 45 130 336 785 1682 3351
5 25 130 650 2942 11819 42305 136564
6 41 336 2942 24520 183010 1202234 6979061
7 63 785 11819 183010 2625117 33345183 371484319
8 92 1682 42305 1202234 33345183 836488618 470742266
9 129 3351 136564 6979061 371484319 470742266 230288201
10 175 6280 402910 36211867 651371519 194085968 670171373
11 231 11176 1099694 170079565 17940222 26957098 939510047
```

```input3
5 5 2
```

```output3
0 1 0 1 0
1 1 0 1 1
0 0 1 0 0
1 1 0 0 0
0 1 0 0 0
```