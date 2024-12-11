Score : $600$ points

## Problem Statement

Given are strings $S$ and $T$ consisting of `0` and `1`.<br>
We will change some of the characters in $T$ so that $T$ becomes a substring of $S$.<br>
How many characters do we need to change at least?

What is a substring?

$T$ is said to be a substring of $S$ when some contiguous part of $S$ matches $T$.  
For example, `000` is a substring of `10001`, while `11` is not.

## Constraints

- Each of $S$ and $T$ consists of `0` and `1`.
- $1 \leq |T| \leq |S| \leq 10^6$

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

Print the answer.

```input1
0001
101
```

```output1
1
```

Changing $T$ to `001` makes it match the $2$-nd through $4$-th characters of $S$.

```input2
0101010
1010101
```

```output2
7
```

```input3
10101000010011011110
0010011111
```

```output3
1
```