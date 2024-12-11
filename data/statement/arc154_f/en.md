Score : $900$ points

## Problem Statement

We have an $N$-sided die where all sides have the same probability to show up. Let us repeat rolling this die until every side has shown up.

For integers $i$ such that $1 \le i \le M$, find the expected value, modulo $998244353$, of the $i$-th power of the number of times we roll the die.

    
        Definition of expected value modulo $998244353$
    
    

        It can be proved that the sought expected values are always rational numbers. Additionally, under the constraints of this problem, when such a value is represented as an irreducible fraction $\frac{P}{Q}$, it can be proved that $Q \neq 0 \pmod{998244353}$. Thus, there is a unique integer $R$ such that $R \times Q = P \pmod{998244353}$ and $0 \le R &lt; 998244353$. Print this $R$.
    

## Constraints

- $1 \le N,M \le 2 \times 10^5$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print $M$ lines.

The $i$-th line should contain the expected value, modulo $998244353$, of the $i$-th power of the number of times we roll the die.

```input1
3 3
```

```output1
499122182
37
748683574
```

For $i=1$, you should find the expected value of the number of times we roll the die, which is $\frac{11}{2}$.

```input2
7 8
```

```output2
449209977
705980975
631316005
119321168
62397541
596241562
584585746
378338599
```

```input3
2023 7
```

```output3
442614988
884066164
757979000
548628857
593993207
780067557
524115712
```