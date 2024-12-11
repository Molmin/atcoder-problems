Score : $200$ points

## Problem Statement

AtCoDeer has an empty piggy bank.<br>
On the morning of the $i$-th day, he will put $i$ yen (Japanese currency) in it: $1$ yen on the morning of the $1$-st day, $2$ yen on the morning of the $2$-nd day, and so on.<br>
Each night, he will check the amount of money in it.<br>
On which day will he find out that his piggy bank has $N$ yen or more for the first time?

## Constraints

- $1 \le N \le 10^9$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print an integer $x$ such that AtCoDeer will find out that his piggy bank has $N$ yen or more for the first time on the $x$-th day.

```input1
12
```

```output1
5
```

- On the $1$-st day, the piggy bank gets $1$ yen in the morning and has $1$ yen at night.
- On the $2$-st day, the piggy bank gets $2$ yen in the morning and has $3$ yen at night.
- On the $3$-rd day, the piggy bank gets $3$ yen in the morning and has $6$ yen at night.
- On the $4$-th day, the piggy bank gets $4$ yen in the morning and has $10$ yen at night.
- On the $5$-th day, the piggy bank gets $5$ yen in the morning and has $15$ yen at night.

Thus, on the $5$-th night, AtCoDeer will find out that his piggy bank has $12$ yen or more for the first time.

```input2
100128
```

```output2
447
```