Score : $1000$ points

## Problem Statement

*ButCoder Inc.* is a startup company whose main business is the development and operation of the programming competition site "*ButCoder*".

There are $N$ members of the company including the president, and each member except the president has exactly one direct boss. Each member has a unique ID number from $1$ to $N$, and the member with the ID $i$ is called Member $i$. The president is Member $1$, and the direct boss of Member $i$ $(2 \leq i \leq N)$ is Member $b_i$ $(1 \leq b_i &lt; i)$.

All the members in ButCoder have gathered in the great hall in the main office to take a group photo. The hall is very large, and all $N$ people can stand in one line. However, they have been unable to decide the order in which they stand. For some reason, all of them except the president want to avoid standing next to their direct bosses.

How many ways are there for them to stand in a line that satisfy their desires? Find the count modulo $10^9+7$.

## Constraints

- $2 \leq N \leq 2000$
- $1 \leq b_i &lt; i$ $(2 \leq i \leq N)$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $b_2$
> 
> $b_3$
> 
> $:$
> 
> $b_N$

## Output

Print the number of ways for the $N$ members to stand in a line, such that no member except the president is next to his/her direct boss, modulo $10^9+7$.

```input1
4
1
2
3
```

```output1
2
```

Below, we will write $A \to B$ to denote the fact that Member $A$ is the direct boss of Member $B$.

In this case, the hierarchy of the members is $1 \to 2 \to 3 \to 4$. There are two ways for them to stand in a line that satisfy their desires:

- $2, 4, 1, 3$
- $3, 1, 4, 2$

Note that the latter is the reverse of the former, but we count them individually.

```input2
3
1
2
```

```output2
0
```

The hierarchy of the members is $1 \to 2 \to 3$. No matter what order they stand in, at least one of the desires of Member $2$ and $3$ is not satisfied, so the answer is $0$.

```input3
5
1
1
3
3
```

```output3
8
```

The hierarchy of the members is shown below:

![](https://img.atcoder.jp/cf17-exhibition/88bc845e074e0a3fecd96e2db9f3b1a5.png)

There are eight ways for them to stand in a line that satisfy their desires:

- $1, 4, 5, 2, 3$
- $1, 5, 4, 2, 3$
- $3, 2, 4, 1, 5$
- $3, 2, 4, 5, 1$
- $3, 2, 5, 1, 4$
- $3, 2, 5, 4, 1$
- $4, 1, 5, 2, 3$
- $5, 1, 4, 2, 3$

```input4
15
1
2
3
1
4
2
7
1
8
2
8
1
8
2
```

```output4
97193524
```