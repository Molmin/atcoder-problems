Score: $100$ points

## Problem Statement

In AtCoder city, there are five antennas standing in a straight line. They are called Antenna $A, B, C, D$ and $E$ from west to east, and their coordinates are $a, b, c, d$ and $e$, respectively.<br>
Two antennas can communicate directly if the distance between them is $k$ or less, and they cannot if the distance is greater than $k$.<br>
Determine if there exists a pair of antennas that cannot communicate **directly**.<br>
Here, assume that the distance between two antennas at coordinates $p$ and $q$ ($p &lt; q$) is $q - p$.  

## Constraints

- $a, b, c, d, e$ and $k$ are integers between $0$ and $123$ (inclusive).
- $a &lt; b &lt; c &lt; d &lt; e$

## Input

Input is given from Standard Input in the following format:

> $a$
> 
> $b$
> 
> $c$
> 
> $d$
> 
> $e$
> 
> $k$

## Output

Print `:(` if there exists a pair of antennas that cannot communicate **directly**, and print `Yay!` if there is no such pair.

```input1
1
2
4
8
9
15
```

```output1
Yay!
```

In this case, there is no pair of antennas that cannot communicate directly, because:

- the distance between $A$ and $B$ is $2 - 1$ = $1$
- the distance between $A$ and $C$ is $4 - 1$ = $3$
- the distance between $A$ and $D$ is $8 - 1$ = $7$
- the distance between $A$ and $E$ is $9 - 1$ = $8$
- the distance between $B$ and $C$ is $4 - 2$ = $2$
- the distance between $B$ and $D$ is $8 - 2$ = $6$
- the distance between $B$ and $E$ is $9 - 2$ = $7$
- the distance between $C$ and $D$ is $8 - 4$ = $4$
- the distance between $C$ and $E$ is $9 - 4$ = $5$
- the distance between $D$ and $E$ is $9 - 8$ = $1$

and none of them is greater than $15$. Thus, the correct output is `Yay!`.

```input2
15
18
26
35
36
18
```

```output2
:(
```

In this case, the distance between antennas $A$ and $D$ is $35 - 15$ = $20$ and exceeds $18$, so they cannot communicate directly.
Thus, the correct output is `:(`.