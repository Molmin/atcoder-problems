Score: $600$ points

## Problem Statement

You are given a string $S$. Each character of $S$ is one of `123456789+*`, and the first and last characters of $S$ are digits. There are no adjacent non-digit characters in $S$.

For a pair of integers $i, j$ ($1 \leq i \leq j \leq |S|$), we define $\mathrm{eval}(S_{i..j})$ as follows:

- If both the $i$-th and $j$-th characters of $S$ are digits, then $\mathrm{eval}(S_{i..j})$ is the result of evaluating the $i$-th to the $j$-th characters (inclusive) of $S$ as a usual arithmetic expression (where `*` represents multiplication). For example, if $S =$ `1+2*151`, then $\mathrm{eval}(S_{1..6}) = 1 + 2 \times 15 = 31$.
- Otherwise, $\mathrm{eval}(S_{i..j})$ is zero.

Find ${\displaystyle \sum_{i=1}^{|S|} \sum_{j=i}^{|S|} \mathrm{eval}(S_{i..j})}$, modulo $998244353$.

## Constraints

- $1 \leq |S| \leq 10^6$
- Each character of $S$ is one of `123456789+*`.
- The first and last characters of $S$ are digits.
- There are no adjacent non-digit characters in $S$.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Print ${\displaystyle \sum_{i=1}^{|S|} \sum_{j=i}^{|S|} \mathrm{eval}(S_{i..j})}$, modulo $998244353$.

```input1
1+2*34
```

```output1
197
```

The cases where $\mathrm{eval}(S_{i..j})$ is not zero are as follows:

- $\mathrm{eval}(S_{1..1}) = 1$
- $\mathrm{eval}(S_{1..3}) = 1 + 2 = 3$
- $\mathrm{eval}(S_{1..5}) = 1 + 2 \times 3 = 7$
- $\mathrm{eval}(S_{1..6}) = 1 + 2 \times 34 = 69$
- $\mathrm{eval}(S_{3..3}) = 2$
- $\mathrm{eval}(S_{3..5}) = 2 \times 3 = 6$
- $\mathrm{eval}(S_{3..6}) = 2 \times 34 = 68$
- $\mathrm{eval}(S_{5..5}) = 3$
- $\mathrm{eval}(S_{5..6}) = 34$
- $\mathrm{eval}(S_{6..6}) = 4$

The sum of these is $1+3+7+69+2+6+68+3+34+4 = 197$.

```input2
338*3338*33338*333338+3333338*33333338+333333338
```

```output2
527930018
```