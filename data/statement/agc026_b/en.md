Score : $600$ points

## Problem Statement

Ringo Mart, a convenience store, sells apple juice.

On the opening day of Ringo Mart, there were $A$ cans of juice in stock in the morning.
Snuke buys $B$ cans of juice here every day in the daytime.
Then, the manager checks the number of cans of juice remaining in stock every night.
If there are $C$ or less cans, $D$ new cans will be added to the stock by the next morning.

Determine if Snuke can buy juice indefinitely, that is, there is always $B$ or more cans of juice in stock when he attempts to buy them.
Nobody besides Snuke buy juice at this store.

Note that each test case in this problem consists of $T$ queries.

## Constraints

- $1 \leq T \leq 300$
- $1 \leq A, B, C, D \leq 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $A_1$ $B_1$ $C_1$ $D_1$
> 
> $A_2$ $B_2$ $C_2$ $D_2$
> 
> $:$
> 
> $A_T$ $B_T$ $C_T$ $D_T$

In the $i$-th query, $A = A_i, B = B_i, C = C_i, D = D_i$.

## Output

Print $T$ lines. The $i$-th line should contain `Yes` if Snuke can buy apple juice indefinitely in the $i$-th query; `No` otherwise.

```input1
14
9 7 5 9
9 7 6 9
14 10 7 12
14 10 8 12
14 10 9 12
14 10 7 11
14 10 8 11
14 10 9 11
9 10 5 10
10 10 5 10
11 10 5 10
16 10 5 10
1000000000000000000 17 14 999999999999999985
1000000000000000000 17 15 999999999999999985
```

```output1
No
Yes
No
Yes
Yes
No
No
Yes
No
Yes
Yes
No
No
Yes
```

In the first query, the number of cans of juice in stock changes as follows: (D represents daytime and N represents night.)

$9$
<ruby><rb>→</rb><rt>D</rt></ruby> $2$
<ruby><rb>→</rb><rt>N</rt></ruby> $11$
<ruby><rb>→</rb><rt>D</rt></ruby> $4$
<ruby><rb>→</rb><rt>N</rt></ruby> $13$
<ruby><rb>→</rb><rt>D</rt></ruby> $6$
<ruby><rb>→</rb><rt>N</rt></ruby> $6$
<ruby><rb>→</rb><rt>D</rt></ruby> x

In the second query, the number of cans of juice in stock changes as follows:

$9$
<ruby><rb>→</rb><rt>D</rt></ruby> $2$
<ruby><rb>→</rb><rt>N</rt></ruby> $11$
<ruby><rb>→</rb><rt>D</rt></ruby> $4$
<ruby><rb>→</rb><rt>N</rt></ruby> $13$
<ruby><rb>→</rb><rt>D</rt></ruby> $6$
<ruby><rb>→</rb><rt>N</rt></ruby> $15$
<ruby><rb>→</rb><rt>D</rt></ruby> $8$
<ruby><rb>→</rb><rt>N</rt></ruby> $8$
<ruby><rb>→</rb><rt>D</rt></ruby> $1$
<ruby><rb>→</rb><rt>N</rt></ruby> $10$
<ruby><rb>→</rb><rt>D</rt></ruby> $3$
<ruby><rb>→</rb><rt>N</rt></ruby> $12$
<ruby><rb>→</rb><rt>D</rt></ruby> $5$
<ruby><rb>→</rb><rt>N</rt></ruby> $14$
<ruby><rb>→</rb><rt>D</rt></ruby> $7$
<ruby><rb>→</rb><rt>N</rt></ruby> $7$
<ruby><rb>→</rb><rt>D</rt></ruby> $0$
<ruby><rb>→</rb><rt>N</rt></ruby> $9$
<ruby><rb>→</rb><rt>D</rt></ruby> $2$
<ruby><rb>→</rb><rt>N</rt></ruby> $11$
<ruby><rb>→</rb><rt>D</rt></ruby> …

and so on, thus Snuke can buy juice indefinitely.

```input2
24
1 2 3 4
1 2 4 3
1 3 2 4
1 3 4 2
1 4 2 3
1 4 3 2
2 1 3 4
2 1 4 3
2 3 1 4
2 3 4 1
2 4 1 3
2 4 3 1
3 1 2 4
3 1 4 2
3 2 1 4
3 2 4 1
3 4 1 2
3 4 2 1
4 1 2 3
4 1 3 2
4 2 1 3
4 2 3 1
4 3 1 2
4 3 2 1
```

```output2
No
No
No
No
No
No
Yes
Yes
No
No
No
No
Yes
Yes
Yes
No
No
No
Yes
Yes
Yes
No
No
No
```