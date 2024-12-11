Score : $300$ points

## Problem Statement

You are given a string $S$.<br>
How many ways are there to choose and underline eight of its characters so that those characters read `c`, `h`, `o`, `k`, `u`, `d`, `a`, `i` from left to right?<br>
Since the count can be enormous, print it modulo $(10^9 + 7)$.

## Constraints

- $8 \leq |S| \leq 10^5$
- $S$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the number of ways modulo $(10^9 + 7)$.

```input1
chchokudai
```

```output1
3
```

We have three valid ways:

<u>ch</u>ch<u>okudai</u><br>
<u>c</u>hc<u>hokudai</u><br>
ch<u>chokudai</u>  

while the following is invalid:

c<u>hc</u>h<u>okudai</u>  

```input2
atcoderrr
```

```output2
0
```

The answer may be $0$.

```input3
chokudaichokudaichokudai
```

```output3
45
```