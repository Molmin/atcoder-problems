配点 : $400$ 点

## 問題文

$N$ 人が円卓に座っており，各人は反時計回りに順に $1, \ldots, N$ と番号付けられています．各人はそれぞれ左右どちらか一方の利き手を持っています．

円卓上には $1, \ldots, N$ と番号付けられた計 $N$ 本のスプーンが，隣り合う二人の間に $1$ 本ずつ置いてあります．各 $1 \leq i \leq N$ について，人 $i$ の左側，右側にはそれぞれスプーン $i$，スプーン $(i+1)$ があります．ここで，スプーン $(N+1)$ はスプーン $1$ のことを指します．

$N = 4$ での模式図を以下に示します．

![](https://img.atcoder.jp/arc175/b86aef99039c82389bf15f8df725a4c5.png)

$(1, \dots, N)$ の順列 $(P_1, \dots, P_N)$ が与えられます．$i=1,\dots,N$ の順に，人 $P_i$ が以下のように行動します．

- 自分の右側または左側にスプーンが残っているならば，そのうち $1$ つを取る．
-   - このとき自分の両側にスプーンが残っているならば，自分の利き手の側のスプーンを取る．
- そうでないならば何もしない．

`L`, `R`, `?` からなる長さ $N$ の文字列 $S$ が与えられます．$N$ 人の利き手の組み合わせは $2^N$ 通りありますが，そのうち以下の条件を全て満たすような組み合わせの数を $998244353$ で割った余りを求めてください．

- $S$ の $i$ 番目の文字が `L` ならば，人 $i$ は左利きである．
- $S$ の $i$ 番目の文字が `R` ならば，人 $i$ は右利きである．
- 全員の行動が終了したとき，全員がスプーンを取っている．

## 制約

- 入力される数値は全て整数
- $2 \leq N \leq 2 \times 10^5$
- $(P_1, \dots, P_N)$ は $(1, \dots, N)$ の順列
- $S$ は `L`, `R`, `?` からなる長さ $N$ の文字列

## 入力

入力は以下の形式で標準入力から与えられる．

> $N$
> 
> $P_1$ $\dots$ $P_N$
> 
> $S$

## 出力

答えを $1$ 行に出力せよ．

```input1
3
1 2 3
L??
```

```output1
2
```

人 $1,2,3$ がそれぞれ左利き，左利き，右利きのとき，以下のように行動が行われます．

- 人 $1$ が行動を開始する．人 $1$ の両側にスプーンが残っているので，人 $1$ の利き手と同じ左側のスプーン $1$ を取る．
- 人 $2$ が行動を開始する．人 $2$ の両側にスプーンが残っているので，人 $2$ の利き手と同じ左側のスプーン $2$ を取る．
- 人 $3$ が行動を開始する．人 $3$ の右側にはスプーンが残っておらず，左側にはスプーン $3$ が残っているので，スプーン $3$ を取る．全員の行動が終了し，このとき全員がスプーンを取っている．

この利き手の組み合わせは条件を満たします．他には人 $1,2,3$ がそれぞれ左利き，左利き，左利きの場合も条件を満たします．

```input2
3
1 3 2
R?L
```

```output2
0
```

条件を満たす利き手の組み合わせが存在しません．

```input3
12
6 2 9 3 1 4 11 5 12 10 7 8
????????????
```

```output3
160
```