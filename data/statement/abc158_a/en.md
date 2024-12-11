Score : $100$ points

## Problem Statement

In AtCoder City, there are three stations numbered $1$, $2$, and $3$.

Each of these stations is operated by one of the two railway companies, A and B. A string $S$ of length $3$ represents which company operates each station. If $S_i$ is `A`, Company A operates Station $i$; if $S_i$ is `B`, Company B operates Station $i$.

To improve the transportation condition, for each pair of a station operated by Company A and one operated by Company B, there will be a bus service connecting them.

Determine if there is a pair of stations that will be connected by a bus service.

## Constraints

- Each character of $S$ is `A` or `B`.
- $|S| = 3$

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

If there is a pair of stations that will be connected by a bus service, print `Yes`; otherwise, print `No`.

```input1
ABA
```

```output1
Yes
```

Company A operates Station $1$ and $3$, while Company B operates Station $2$.

There will be a bus service between Station $1$ and $2$, and between Station $2$ and $3$, so print `Yes`.

```input2
BBA
```

```output2
Yes
```

Company B operates Station $1$ and $2$, while Company A operates Station $3$.

There will be a bus service between Station $1$ and $3$, and between Station $2$ and $3$, so print `Yes`.

```input3
BBB
```

```output3
No
```

Company B operates all the stations. Thus, there will be no bus service, so print `No`.