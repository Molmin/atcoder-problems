Score : $100$ points

## Problem Statement

DEGwer's doctoral dissertation consists of $N$ pages. Currently, there are $K$ typos in this doctoral dissertation, and the $i$-th typo $(i = 1, \ldots, K)$ is on page $A_i$.

To submit the doctoral dissertation, it is necessary to correct the typos so that no consecutive $T$ pages contain multiple typos.
Please help busy DEGwer, who is preparing this contest, by determining the minimum number of typos that need to be corrected in order to submit the doctoral dissertation.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq K \leq 2 \times 10^5$
- $1 \leq T \leq N$
- $1 \leq A_i \leq N \ \ (1 \leq i \leq K)$

## Input

The input is given from Standard Input in the following format:

> $N \ K \ T$ 
> 
> $A_1 \ A_2 \ \dots \ A_K$

## Output

Output the minimum number of typos that need to be corrected to submit the doctoral dissertation.

```input1
5 4 3
1 2 4 5
```

```output1
2
```

DEGwer's doctoral dissertation consists of $5$ pages, with one typo each on the $1$st, $2$nd, $4$th, and $5$th pages.

For example, if the typos on the $1$st and $4$th pages are corrected, then no consecutive $3$ pages will have multiple typos.
On the other hand, it can also be confirmed that it is impossible to meet this condition by correcting only one typo.
Therefore, output $2$ as the minimum number of typos to be corrected.

```input2
4 8 2
1 1 1 1 1 4 2 2
```

```output2
6
```

There may also be multiple typos on a single page.

```input3
5 2 3
4 1
```

```output3
0
```

There may be no need to correct any typos.