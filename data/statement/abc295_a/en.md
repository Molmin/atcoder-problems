Score : $100$ points

## Problem Statement

You are given $N$ strings $W_1,W_2,\dots,W_N$ consisting of lowercase English letters.<br>
If one or more of these strings equal `and`, `not`, `that`, `the`, or `you`, then print `Yes`; otherwise, print `No`.

## Constraints

- $N$ is an integer between $1$ and $100$, inclusive.
- $1 \le |W_i| \le 50$ ($|W_i|$ is the length of $W_i$.)
- $W_i$ consists of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $W_1$ $W_2$ $\dots$ $W_N$

## Output

Print the answer.

```input1
10
in that case you should print yes and not no
```

```output1
Yes
```

We have, for instance, $W_4=$ `you`, so you should print `Yes`.

```input2
10
in diesem fall sollten sie no und nicht yes ausgeben
```

```output2
No
```

None of the strings $W_i$ equals any of `and`, `not`, `that`, `the`, and `you`.