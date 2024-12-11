Score : $300$ points

## Problem Statement

You have $N$ bamboos. The lengths (in centimeters) of these are $l_1, l_2, ..., l_N$, respectively.

Your objective is to use some of these bamboos (possibly all) to obtain three bamboos of length $A, B, C$. For that, you can use the following three kinds of magics any number:

- Extension Magic: Consumes $1$ *MP* (magic point). Choose one bamboo and increase its length by $1$.
- Shortening Magic: Consumes $1$ MP. Choose one bamboo of length at least $2$ and decrease its length by $1$.
- Composition Magic: Consumes $10$ MP. Choose two bamboos and combine them into one bamboo. The length of this new bamboo is equal to the sum of the lengths of the two bamboos combined. (Afterwards, further magics can be used on this bamboo.)

At least how much MP is needed to achieve the objective?

## Constraints

- $3 \leq N \leq 8$
- $1 \leq C &lt; B &lt; A \leq 1000$
- $1 \leq l_i \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $A$ $B$ $C$
> 
> $l_1$
> 
> $l_2$
> 
> $:$
> 
> $l_N$

## Output

Print the minimum amount of MP needed to achieve the objective.

```input1
5 100 90 80
98
40
30
21
80
```

```output1
23
```

We are obtaining three bamboos of lengths $100, 90, 80$ from five bamboos $98, 40, 30, 21, 80$. We already have a bamboo of length $80$, and we can obtain bamboos of lengths $100, 90$ by using the magics as follows at the total cost of $23$ MP, which is optimal.

1. Use Extension Magic twice on the bamboo of length $98$ to obtain a bamboo of length $100$. (MP consumed: $2$)
2. Use Composition Magic on the bamboos of lengths $40, 30$ to obtain a bamboo of length $70$. (MP consumed: $10$)
3. Use Shortening Magic once on the bamboo of length $21$ to obtain a bamboo of length $20$. (MP consumed: $1$)
4. Use Composition Magic on the bamboo of length $70$ obtained in step 2 and the bamboo of length $20$ obtained in step 3 to obtain a bamboo of length $90$. (MP consumed: $10$)

```input2
8 100 90 80
100
100
90
90
90
80
80
80
```

```output2
0
```

If we already have all bamboos of the desired lengths, the amount of MP needed is $0$. As seen here, we do not necessarily need to use all the bamboos.

```input3
8 1000 800 100
300
333
400
444
500
555
600
666
```

```output3
243
```