Score: $300$ points

## Problem Statement

Mr. Infinity has a string $S$ consisting of digits from `1` to `9`. Each time the date changes, this string changes as follows:

- Each occurrence of `2` in $S$ is replaced with `22`. Similarly, each `3` becomes `333`, `4` becomes `4444`, `5` becomes `55555`, `6` becomes `666666`, `7` becomes `7777777`, `8` becomes `88888888` and `9` becomes `999999999`. `1` remains as `1`.

For example, if $S$ is `1324`, it becomes `1333224444` the next day, and it becomes `133333333322224444444444444444` the day after next.
You are interested in what the string looks like after $5 \times 10^{15}$ days. What is the $K$-th character from the left in the string after $5 \times 10^{15}$ days?

## Constraints

- $S$ is a string of length between $1$ and $100$ (inclusive).
- $K$ is an integer between $1$ and $10^{18}$ (inclusive).
- The length of the string after $5 \times 10^{15}$ days is at least $K$.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $K$

## Output

Print the $K$-th character from the left in Mr. Infinity's string after $5 \times 10^{15}$ days.

```input1
1214
4
```

```output1
2
```

The string $S$ changes as follows:  

- Now: `1214`
- After one day: `12214444`
- After two days: `1222214444444444444444`
- After three days: `12222222214444444444444444444444444444444444444444444444444444444444444444`

The first five characters in the string after $5 \times 10^{15}$ days is `12222`. As $K=4$, we should print the fourth character, `2`.

```input2
3
157
```

```output2
3
```

The initial string is `3`. The string after $5 \times 10^{15}$ days consists only of `3`.

```input3
299792458
9460730472580800
```

```output3
2
```