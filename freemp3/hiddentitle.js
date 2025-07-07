        const originalTitle = document.title;
        const hiddenTitle = "不要走，快回来ε=ε=ヾ(;ﾟдﾟ)/";
        const visibleTitle = "欢迎肥来ᕕ(◠ڼ◠)ᕗ";
        
        let titleTimer;
        
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                clearTimeout(titleTimer);
                document.title = hiddenTitle;
            } else {
                document.title = visibleTitle;
                titleTimer = setTimeout(function() {
                    document.title = originalTitle;
                }, 2000);
            }
        });
