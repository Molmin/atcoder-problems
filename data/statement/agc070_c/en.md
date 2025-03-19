Score : $1000$ points

## Problem Statement

Alice and Bob played rock-paper-scissors $N$ times.
Each round of rock-paper-scissors results in “Alice’s win,” “Bob’s win,” or “Draw.”<br>
Among all possible sequences of results of $N$ rounds, how many satisfy the following conditions? Find the count modulo <font color="red">$\bf{1000000007 = 10^9 + 7}$</font>.

- Among the $N$ rounds, Alice won exactly $A$ times and Bob won exactly $B$ times.
- Alice never won twice in a row without intervening draws.
- Bob never won twice in a row without intervening draws.
- At no point did Bob’s number of wins exceed Alice’s number of wins. Formally, for all $1 \leq i \leq N$, “the number of times Alice has won up through round $i$” is at least “the number of times Bob has won up through round $i$.”

## Constraints

- $2 \leq N \leq 2 \times 10^7$
- $1 \leq B \leq A$
- $A + B \leq N$
- $N$, $A$, and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $B$

## Output

Print the number, modulo $(10^9 + 7)$, of sequences of results of $N$ rounds that satisfy the conditions.

```input1
5 2 2
```

```output1
5
```

For example, the following sequence of $N$ rounds satisfies the conditions:

- Round $1$: Alice wins.
- Round $2$: Bob wins.
- Round $3$: Alice wins.
- Round $4$: Draw.
- Round $5$: Bob wins.

On the other hand, the following sequence of $N$ rounds does **not** satisfy the conditions, because after round $4$, Alice’s number of wins $(=1)$ is less than Bob’s number of wins $(=2)$:

- Round $1$: Alice wins.
- Round $2$: Bob wins.
- Round $3$: Draw.
- Round $4$: Bob wins.
- Round $5$: Alice wins.

There are five sequences in total that satisfy the conditions.

```input2
70 29 12
```

```output2
693209192
```

Remember to find the count modulo $(10^9 + 7)$.

```input3
20000000 1234567 890123
```

```output3
566226457
```