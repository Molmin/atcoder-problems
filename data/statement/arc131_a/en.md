Score : $300$ points

## Problem Statement

Mr. AtCoder reads in the newspaper that today's lucky number is a positive integer $A$ and tomorrow's is a positive integer $B$.

Here, he defines a positive integer $x$ that satisfies both of the following conditions as a super-lucky number.

- The decimal notation of $x$ contains $A$ as a contiguous substring.
- The decimal notation of $2x$ contains $B$ as a contiguous substring.

Actually, under the Constraints of this problem, there is always a super-lucky number less than $10^{18}$. Find one such number.

## Constraints

- $1 \leq A &lt; 10^8$
- $1 \leq B &lt; 10^8$
- $A$ and $B$ have no leading `0`s.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $A$
> 
> $B$

## Output

Print one super-lucky number less than $10^{18}$. If multiple solutions exist, you may print any of them.

```input1
13
62
```

```output1
131
```

One super-lucky number is $x = 131$, because:

- $x = 131$ contains $13$ as a substring. ($1$-st through $2$-nd characters)
- $2x = 262$ contains $62$ as a substring. ($2$-nd through $3$-rd characters)

Some other super-lucky numbers are $313$, $8135$, and $135797531$, which would also be accepted.

```input2
69120
824
```

```output2
869120
```

One super-lucky number is $x = 869120$, because:

- $x = 869120$ contains $69120$ as a substring. ($2$-nd through $6$-th characters)
- $2x = 1738240$ contains $824$ as a substring. ($4$-th through $6$-th characters)

The smallest super-lucky number is $69120$, but note that any lucky number with at most $18$ digits would be accepted.

```input3
6283185
12566370
```

```output3
6283185
```

When $x = 6283185$, $x$ is $A$ itself, and $2x$ is $B$ itself. In such a case too, $x$ is a super-lucky number.