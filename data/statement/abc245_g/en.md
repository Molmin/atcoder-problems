Score : $600$ points

## Problem Statement

There are $N$ people and $K$ nations, labeled as Person $1$, Person $2$, $\ldots$, Person $N$ and Nation $1$, Nation $2$, $\ldots$, Nation $K$, respectively.<br>
Each person belongs to exactly one nation: Person $i$ belongs to Nation $A_i$.
Additionally, there are $L$ popular people among them: Person $B_1$, Person $B_2$, $\ldots$, Person $B_L$ are popular.
Initially, no two of the $N$ people are friends.

For $M$ pairs of people, Takahashi, a God, can make them friends by paying a certain cost: for each $1\leq i\leq M$, he can pay the cost of $C_i$ to make Person $U_i$ and Person $V_i$ friends.

Now, for each $1\leq i\leq N$, solve the following problem.

Can Takahashi make Person $i$ an indirect friend of a popular person belonging to a nation different from that of Person $i$?
If he can do so, find the minimum total cost needed.
Here, Person $s$ is said to be an indirect friend of Person $t$ when there exists a non-negative integer $n$ and a sequence of people $(u_0, u_1, \ldots, u_n)$
such that $u_0=s$, $u_n=t$, and Person $u_i$ and Person $u_{i+1}$ are friends for each $0\leq i &lt; n$.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $1 \leq K \leq 10^5$
- $1 \leq L \leq N$
- $1 \leq A_i \leq K$
- $1 \leq B_1&lt;B_2&lt;\cdots&lt;B_L\leq N$
- $1\leq C_i\leq 10^9$
- $1\leq U_i&lt;V_i\leq N$
- $(U_i, V_i)\neq (U_j,V_j)$ if $i \neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$ $L$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$
> 
> $B_1$ $B_2$ $\cdots$ $B_L$
> 
> $U_1$ $V_1$ $C_1$
> 
> $U_2$ $V_2$ $C_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$ $C_M$

## Output

Let $X_i$ defined as follows: $X_i$ is $-1$ if it is impossible to make Person $i$ an indirect friend of a popular person belonging to a nation different from that of Person $i$; otherwise, $X_i$ is the minimum total cost needed to do so.
Print $X_1, X_2, \ldots, X_N$ in one line, with spaces in between.

```input1
4 4 2 2
1 1 2 2
2 3
1 2 15
2 3 30
3 4 40
1 4 10
```

```output1
45 30 30 25
```

Person $1$, $2$, $3$, $4$ belong to Nation $1$, $1$, $2$, $2$, respectively, and there are two popular people: Person $2$ and $3$. Here,

- For Person $1$, the only popular person belonging to a different nation is Person $3$. To make them indirect friends with the minimum cost, we should pay the cost of $15$ to make Person $1$ and $2$ friends and pay $30$ to make Person $2$ and $3$ friends, for a total of $15+30=45$.
- For Person $2$, the only popular person belonging to a different nation is Person $3$. The minimum cost is achieved by making Person $2$ and $3$ friends by paying $30$.
- For Person $3$, the only popular person belonging to a different nation is Person $2$. The minimum cost is achieved by making Person $2$ and $3$ friends by paying $30$.
- For Person $4$, the only popular person belonging to a different nation is Person $2$. To make them indirect friends with the minimum cost, we should pay the cost of $15$ to make Person $1$ and $2$ friends and pay $10$ to make Person $1$ and $4$ friends, for a total of $15+10=25$.

```input2
3 1 3 1
1 2 3
1
1 2 1000000000
```

```output2
-1 1000000000 -1
```

Note that, for Person $1$, Person $1$ itself is indeed an indirect friend, but it does not belong to a different nation, so there is no popular person belonging to a different nation.