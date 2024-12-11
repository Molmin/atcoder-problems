Score : $400$ points

## Problem Statement

Snuke has $1$ gram of gold and $0$ grams of silver now.
He will do trading of gold and silver for the following $N$ days.
On each day, he has two choices: do nothing, or make a trade.
If he trades on Day $i$ ($1 \leq i \leq N$), the following will happen.

- If he has $x$ grams of gold before the trade, exchange all of it for $x \times A_i$ grams of silver.
On the other hand, if he has $x$ grams of silver, exchange all of it for $x / A_i$ grams of gold.

Snuke's objective is to maximize the amount of gold he has in the end.
Find one way to achieve his objective.

## Constraints

- $2 \leq N \leq 200000$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer in the following format:

> $v_1$ $v_2$ $\cdots$ $v_N$

Here, $v_i$ is an integer representing the action on Day $i$ ($0 \leq v_i \leq 1$). $v_i=0$ means he does nothing, and $v_i=1$ means he makes a trade.
If there are multiple possible solutions, printing any of them will be considered correct.

```input1
3
3 5 2
```

```output1
0 1 1
```

The optimal sequence of actions is as follows.

- <p>Day $1$: Do nothing.</p>
- <p>Day $2$: Exchange $1$ gram of gold for $5$ grams of silver.</p>
- <p>Day $3$: Exchange $5$ grams of silver for $2.5$ grams of gold.</p>

```input2
4
1 1 1 1
```

```output2
0 0 0 0
```

$(v_1,v_2,v_3,v_4)=(1,1,1,1)$, for example, is also considered correct.

```input3
10
426877385 186049196 624834740 836880476 19698398 709113743 436942115 436942115 436942115 503843678
```

```output3
1 1 0 1 1 1 1 0 0 0
```