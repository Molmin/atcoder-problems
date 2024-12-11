Score: $100$ points

## Problem Statement

M-kun is a competitor in AtCoder, whose highest rating is $X$.<br>
In this site, a competitor is given a *kyu* (class) according to his/her highest rating. For ratings from $400$ through $1999$, the following kyus are given:

- From $400$ through $599$: $8$-kyu
- From $600$ through $799$: $7$-kyu
- From $800$ through $999$: $6$-kyu
- From $1000$ through $1199$: $5$-kyu
- From $1200$ through $1399$: $4$-kyu
- From $1400$ through $1599$: $3$-kyu
- From $1600$ through $1799$: $2$-kyu
- From $1800$ through $1999$: $1$-kyu

What kyu does M-kun have?

## Constraints

- $400 \leq X \leq 1999$
- $X$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

Print the kyu M-kun has, as an integer.
For example, if he has $8$-kyu, print `8`.

```input1
725
```

```output1
7
```

M-kun's highest rating is $725$, which corresponds to $7$-kyu.<br>
Thus, `7` is the correct output.

```input2
1600
```

```output2
2
```

M-kun's highest rating is $1600$, which corresponds to $2$-kyu.<br>
Thus, `2` is the correct output.