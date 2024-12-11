Score : $100$ points

## Problem Statement

*Kode Festival* is an anual contest where the hardest stone in the world is determined. (Kode is a Japanese word for "hardness".)

This year, $2^N$ stones participated. The hardness of the $i$-th stone is $A_i$.

In the contest, stones are thrown at each other in a knockout tournament.

When two stones with hardness $X$ and $Y$ are thrown at each other, the following will happen:

- <p>When $X$ &gt; $Y$:
  The stone with hardness $Y$ will be destroyed and eliminated.
  The hardness of the stone with hardness $X$ will become $X-Y$.</p>
- <p>When $X$ = $Y$:
  One of the stones will be destroyed and eliminated.
  The hardness of the other stone will remain the same.</p>
- <p>When $X$ &lt; $Y$:
  The stone with hardness $X$ will be destroyed and eliminated.
  The hardness of the stone with hardness $Y$ will become $Y-X$.</p>

The $2^N$ stones will fight in a knockout tournament as follows:

1. <p>The following pairs will fight: (the $1$-st stone versus the $2$-nd stone), (the $3$-rd stone versus the $4$-th stone), ...</p>
2. <p>The following pairs will fight: (the winner of ($1$-st versus $2$-nd) versus the winner of ($3$-rd versus $4$-th)), (the winner of ($5$-th versus $6$-th) versus the winner of ($7$-th versus $8$-th)), ...</p>
3. <p>And so forth, until there is only one stone remaining.</p>

Determine the eventual hardness of the last stone remaining.

## Constraints

- $1 \leq N \leq 18$
- $1 \leq A_i \leq 10^9$
- $A_i$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$
> 
> $A_2$
> 
> :
> 
> $A_{2^N}$

## Output

Print the eventual hardness of the last stone remaining.

```input1
2
1
3
10
19
```

```output1
7
```

```input2
3
1
3
2
4
6
8
100
104
```

```output2
2
```