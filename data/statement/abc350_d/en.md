Score: $350$ points

## Problem Statement

There is an SNS used by $N$ users, labeled with numbers from $1$ to $N$.

In this SNS, two users can become **friends** with each other.<br>
Friendship is bidirectional; if user X is a friend of user Y, user Y is always a friend of user X.

Currently, there are $M$ pairs of friendships on the SNS, with the $i$-th pair consisting of users $A_i$ and $B_i$.

Determine the maximum number of times the following operation can be performed:

- Operation: Choose three users X, Y, and Z such that X and Y are friends, Y and Z are friends, but X and Z are not. Make X and Z friends.

## Constraints

- $2 \leq N \leq 2 \times 10^5$
- $0 \leq M \leq 2 \times 10^5$
- $1 \leq A_i &lt; B_i \leq N$
- The pairs $(A_i, B_i)$ are distinct.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

Print the answer.

```input1
4 3
1 2
2 3
1 4
```

```output1
3
```

Three new friendships with a friend's friend can occur as follows:

- User $1$ becomes friends with user $3$, who is a friend of their friend (user $2$)
- User $3$ becomes friends with user $4$, who is a friend of their friend (user $1$)
- User $2$ becomes friends with user $4$, who is a friend of their friend (user $1$)

There will not be four or more new friendships.

```input2
3 0
```

```output2
0
```

If there are no initial friendships, no new friendships can occur.

```input3
10 8
1 2
2 3
3 4
4 5
6 7
7 8
8 9
9 10
```

```output3
12
```