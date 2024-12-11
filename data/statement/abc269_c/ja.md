配点 : $300$ 点

## 問題文

非負整数 $N$ が与えられるので、以下の条件を満たす非負整数 $x$ を昇順に全て出力してください。  

- $x$ を $2$ 進数として表記した時に $1$ となる位の集合が、 $N$ を $2$ 進数として表記した時に $1$ となる位の集合の部分集合となる。-   - すなわち、全ての非負整数 $k$ について、「 $x$ の $2^k$ の位が $1$ ならば、 $N$ の $2^k$ の位は $1$ 」が成り立つ。

## 制約

- $N$ は整数
- $0 \le N &lt; 2^{60}$
- $N$ を $2$ 進数として表記した時、 $1$ となる位は $15$ 個以下である

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$

## 出力

答えを $1$ 行に $1$ つずつ、$10$ 進法の整数として昇順に出力せよ。

```input1
11
```

```output1
0
1
2
3
8
9
10
11
```

$N = 11_{(10)}$ を $2$ 進数で表記すると、 $1011_{(2)}$ となります。<br>
条件を満たす非負整数 $x$ は以下の通りです。  

- $0000_{(2)}=0_{(10)}$
- $0001_{(2)}=1_{(10)}$
- $0010_{(2)}=2_{(10)}$
- $0011_{(2)}=3_{(10)}$
- $1000_{(2)}=8_{(10)}$
- $1001_{(2)}=9_{(10)}$
- $1010_{(2)}=10_{(10)}$
- $1011_{(2)}=11_{(10)}$

```input2
0
```

```output2
0
```

```input3
576461302059761664
```

```output3
0
524288
549755813888
549756338176
576460752303423488
576460752303947776
576461302059237376
576461302059761664
```

入力は $32$bit 符号付き整数に収まらない可能性があります。